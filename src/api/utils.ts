import dayjs from "dayjs"
import Parse from "parse"
export enum CLASS_NAME {
  CATTLE = "Cattle",
}
export const parseResultObject = (results) => {
  if (Array.isArray(results)) {
    let objs = []
    results.map((obj) => {
      const json = obj.toJSON()
      json.parseObject = obj
      objs.push(json)
    })
    return objs
  } else {
    return results?.toJSON()
  }
}

export const convertObjectIdToPointer = (id, className) => {
  return {
    __type: "Pointer",
    className: className,
    objectId: id,
  }
}

export const convertLatLngToGeoPoint = (latitude, longitude) => {
  return {
    __type: "GeoPoint",
    latitude,
    longitude,
  }
}

export const convertDayjsToParseDate = (date) => {
  const isoDate = dayToIso(date)
  return date
    ? {
        __type: "Date",
        iso: isoDate,
      }
    : null
}

export const dayToIso = (date) => {
  const isoDate = date ? dayjs(date).toISOString() : null
  return isoDate
}

export const formatDate = (date, format = "DD MMMM YYYY HH:mm") =>
  date ? dayjs(date).format(format) : ""

export const convertParseDateToString = (dateObj, format) => {
  return formatDate(dateObj?.iso, format)
}

export const findById = async (objectId: string, className: CLASS_NAME) => {
  const ParseObj = Parse.Object.extend(className)
  const query = new Parse.Query(ParseObj)
  const res = await query.get(objectId)
  return parseResultObject(res)
}
export const getAll = async (className: CLASS_NAME) => {
  const ParseObj = Parse.Object.extend(className)
  const query = new Parse.Query(ParseObj)
  query.equalTo("isDeleted", false)
  const res = await query.findAll()
  return parseResultObject(res)
}
