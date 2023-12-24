import { Spinner } from "@material-tailwind/react"
import { useMemo } from "react"
import { CLASS_NAME, getAll } from "../../api/utils"
import CattleTable from "../../components/CattleTable"
import useQuery from "../../hooks/useQuery"

const Cattle = () => {
  const { loading, data, request } = useQuery({
    get: () => getAll(CLASS_NAME.CATTLE),
  })
  useMemo(() => request({}, {}), [])
  return loading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col">
      <CattleTable data={data} />
    </div>
  )
}

export default Cattle
