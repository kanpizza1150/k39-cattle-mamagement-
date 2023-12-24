import { Card, CardBody, Spinner, Typography } from "@material-tailwind/react"
import { useMemo } from "react"
import { CLASS_NAME, getAll } from "../api/utils"
import useQuery from "../hooks/useQuery"

const Home = () => {
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
      <Card className="w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            แจ้งเตือน
          </Typography>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
