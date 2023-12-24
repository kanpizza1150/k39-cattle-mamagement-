import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline"
import { PencilIcon } from "@heroicons/react/24/solid"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  ChipProps,
  IconButton,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"

const TABLE_HEAD = ["ชื่อเรียก", "ชื่อ", "BBFA #", "เพศ", "Status", ""]
const STATUS = [
  {
    label: "All",
    value: "all",
    chipColor: "",
  },
  {
    label: "ตัวเมีย",
    value: "F",
    chipColor: "pink",
  },
  {
    label: "ตัวผู้",
    value: "M",
    chipColor: "blue",
  },
  {
    label: "ท้อง",
    value: "PREGNANT",
    chipColor: "green",
  },
  {
    label: "ผสมแล้ว",
    value: "INSEMINATED",
    chipColor: "amber",
  },
  {
    label: "ไม่ท้อง",
    value: "IDLE",
    chipColor: "red",
  },
]

const Table = ({ data }: any) => {
  const navigate = useNavigate()
  const renderStatus = (status: string) => {
    const itemProps = STATUS.find((v) => v?.value === status)
    return (
      <div className="w-max">
        <Chip
          size="sm"
          variant="ghost"
          value={itemProps?.label}
          color={itemProps?.chipColor as ChipProps["color"]}
        />
      </div>
    )
  }
  const handleEdit = (id: string) => {
    navigate(`/cattle/${id}`)
  }
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Cattle list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all cattle
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button variant="outlined" size="sm">
              view all
            </Button> */}
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={() => {
                navigate(`/cattle/create`)
              }}
            >
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Cattle
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-1/2">
            <TabsHeader>
              {STATUS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ nickname, name, bbfaNo, gender, status, objectId }) => {
                const classes = "p-4 border-b border-blue-gray-50"
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar
                        src={img}
                        alt={name}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      /> */}
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {nickname}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>{" "}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {bbfaNo}
                      </Typography>
                    </td>
                    <td className={classes}>{renderStatus(gender)}</td>
                    <td className={classes}>{renderStatus(status)}</td>
                    <td className={classes}>
                      <Tooltip content="Edit Cattle">
                        <IconButton
                          variant="text"
                          onClick={() => handleEdit(objectId)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  )
}
export default Table
