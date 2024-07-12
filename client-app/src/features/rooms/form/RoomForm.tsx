import { Form, Formik } from "formik";
import { Button, Header, Segment } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { title } from "process";

export default function RoomForm() {

  const validationSchema = Yup.object({
    title: Yup.string().required('The room title is required'),
    description: Yup.string().required('The room description is required'),
    capacity: Yup.number().required('The room capacity is required')
  })

  const handleFormSubmit = () => {

  }

  return (
    <Segment clearing>
      <Header content='Room Details' sub color="teal" />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={handleFormSubmit}
        onSubmit={values => handleFormSubmit()}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit}>
            <MyTextInput name="title" placeholder="Title" />
            <MyTextInput type="number" placeholder='Capacity' name='capacity' />
            <MyTextArea rows={3} placeholder='Description' name='description' />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={isSubmitting} floated="right"
              positive type="submit" content="Submit"
            />
            <Button as={Link} to='/rooms' floated="right" type="button" content="Candel" />
          </Form>
        )}
      </Formik>

    </Segment>
  )
}
