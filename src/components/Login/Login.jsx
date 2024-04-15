import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";

const Login = () => {
    const intitalState = {
        name: "",
        password: "",
        image: "",
    };

    const {values , setValues} = useState(intitalState);
    const onChange = (event) => {
        const {name , value} = event.target;
        setValues({...values , [name]: value});
    };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
       <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" type="text" name="name" value={values.name} onChange={onChange} />
        <Input label="Password" size="lg" type="password" name="password" value={values.password} onChange={onChange} />
        <Input label="Image URL address" size="lg" type="text" name="image" value={values.image} onChange={onChange} />
        <div className="-ml-2.5">
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          image is Optional
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login
