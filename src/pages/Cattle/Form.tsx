import {
  BellIcon,
  CurrencyDollarIcon,
  EllipsisVerticalIcon,
  EyeDropperIcon,
  EyeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline"
import {
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
  Spinner,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { CLASS_NAME, findById } from "../../api/utils"

const Form = ({ mode }: { mode: "create" | "update" }) => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const getInit = async () => {
    setLoading(true)
    try {
      const res = await findById(id as string, CLASS_NAME.CATTLE)
      setData(res)
    } catch (e) {
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (id) {
      getInit()
    }
  }, [id])

  const breadcrumb = useMemo(
    () => (
      <Breadcrumbs>
        <a href="/" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <a href="/cattle" className="opacity-60">
          <span>วัว</span>
        </a>
        <a href="">
          {mode === "create"
            ? "เพิ่มวัว"
            : `${data?.code} - ${data?.name}` || ""}
        </a>
      </Breadcrumbs>
    ),
    [data, mode]
  )
  return (
    <>
      {breadcrumb}
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    {data?.code} - {data?.name}
                  </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Menu>
                    <MenuHandler>
                      <Button className="p-1 bg-neutral-200 text-black overflow-hidden shadow-none hover:shadow-none">
                        <EllipsisVerticalIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem className="flex gap-1 items-center">
                        <PencilIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-semibold"
                        >
                          แก้ไขข้อมูล
                        </Typography>
                      </MenuItem>
                      <MenuItem className="flex gap-1 items-center">
                        <EyeIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-semibold"
                        >
                          ดูใบประวัติ BBFA
                        </Typography>
                      </MenuItem>
                      <MenuItem className="flex gap-1 items-center">
                        <PrinterIcon strokeWidth={2} className="h-4 w-4" />
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-semibold"
                        >
                          สร้าง BBFA03
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-2 gap-5">
                <Carousel className="rounded-xl h-[50vh]">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                </Carousel>
              </div>
              <div></div>
            </CardBody>
          </Card>
          <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="flex items-center justify-between ">
                <Typography variant="h5" color="blue-gray">
                  ข้อมูลประวัติ
                </Typography>
              </div>
            </CardHeader>
            <CardBody>
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <HomeIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>{" "}
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <BellIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>{" "}
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <CurrencyDollarIcon className="h-4 w-4" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600"
                    >
                      The key to more success is to have a lot of pillows. Put
                      it this way, it took me twenty five years to get these
                      plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started.
                      I&apos;m up to something. Fan luv.
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
              <Card>
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="rounded-none"
                >
                  <div className="flex items-center justify-between ">
                    <Typography variant="h5" color="blue-gray">
                      เพิ่มข้อมูล
                    </Typography>
                  </div>
                </CardHeader>
                <CardBody>
                  <form className="">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        ประเภท
                      </Typography>
                      <Select
                        placeholder="USA"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-48" }}
                      >
                        {[
                          {
                            name: "ผสมเทียม",
                            icon: (
                              <EyeDropperIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />
                            ),
                          },
                          {
                            name: "วัคซีน",
                            icon: (
                              <EyeDropperIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />
                            ),
                          },
                          {
                            name: "Ultrasound",
                            icon: (
                              <MagnifyingGlassIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />
                            ),
                          },
                          {
                            name: "ป่วย",
                            icon: (
                              <EyeDropperIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />
                            ),
                          },
                          {
                            name: "ฉีดยา/กรอกยา",
                            icon: (
                              <EyeDropperIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />
                            ),
                          },
                        ].map(({ name, icon }: any) => (
                          <Option key={name} value={name}>
                            <div className="flex items-center gap-x-2">
                              {icon}
                              {name}
                            </div>
                          </Option>
                        ))}
                      </Select>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Your Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </form>
                </CardBody>
              </Card>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  )
}

export default Form
