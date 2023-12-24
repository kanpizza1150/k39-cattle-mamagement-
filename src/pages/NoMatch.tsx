import { Card, CardBody, Typography } from "@material-tailwind/react"

const NoMatch = () => {
  return (
    <div>
      <Card className="h-[50vh] w-full">
        <CardBody className="flex flex-col items-center justify-center h-full">
          <Typography variant="h5">Page not found</Typography>
        </CardBody>
      </Card>
    </div>
  )
}

export default NoMatch
