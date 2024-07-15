import { Form, Formik } from "formik";
import { Button, Header, Segment } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { useStore } from "../../../app/stores/stores";
import { RoomFormValues } from "../../../app/models/room";
import { useState } from "react";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { typeOptions } from "../../../app/common/options/typeOptions";

export default function RoomForm() {

  const { roomStore } = useStore();
  const { createRoom } = roomStore;
  const navigate = useNavigate();

  const [room, setRoom] = useState<RoomFormValues>(new RoomFormValues());
 
  const validationSchema = Yup.object({
    title: Yup.string().required('The room title is required'),
    description: Yup.string().required('The room description is required'),
    capacity: Yup.number().required('The room capacity is required')
  })

  const handleFormSubmit = (room: RoomFormValues) => {
    room.id = uuid();
    room.image = '';
    createRoom(room).then(() => navigate(`/rooms/${room.id}`))
  }

  return (
    <Segment clearing>
      <Header content='Room Details' sub color="teal" />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={room}
        onSubmit={values => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit}>
            <MyTextInput name="title" placeholder="Title" />
            <MyTextInput type="number" placeholder='Capacity' name='capacity' />
            <MySelectInput options={typeOptions} placeholder="Type" name='type' />
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
