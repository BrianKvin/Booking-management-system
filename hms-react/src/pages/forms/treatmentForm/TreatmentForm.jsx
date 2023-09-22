import { Form, Button } from 'react-bootstrap'
import FormContainer from '../bookingForms/FormContainer'

import { useState } from 'react'

const TreatmentForm = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })

        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }


  return (
    <FormContainer>
        <h2>Book a Session</h2>
        <Form>
            <Form.Group controlId='rsrv date'>
                <Form.Label>Seen Patient On</Form.Label>
                <Form.Control
                    type='date'
                    placeholder='Enter date of birth'
                    value = {form.dob}
                    onChange={(e)=> setField('dob', e.target.value)}
                    isInvalid={!!errors.dob}
                ></Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.dob}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='gender'>
                <Form.Label>Session Time</Form.Label>
                <Form.Select placeholder='Select Gender'>
                    <option>Select Time</option>
                    <option value='M'>Morning</option>
                    <option value='E'>Evening</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='country'>
                <Form.Label>Service</Form.Label>
                <Form.Select placeholder='Select a Service'>
                    <option>Counseling</option>
                    <option>Therapy</option>
                    <option>Physiology</option>
                </Form.Select>
                <div className='red'>{errors.location}</div>
            </Form.Group>
            {/* <Form.Group controlId='seeking'>
                <Form.Label>Your Choice</Form.Label>
                <Form.Select type='text' placeholder='Enter Seeking'>
                    <option>Select a Doctor</option>
                    <option>Doc 1</option>
                    <option>Doc 2</option>
                    <option>Doc 3</option>
                </Form.Select>
            </Form.Group> */}
            <Form.Group controlId='bio'>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={2}
                    type='textarea'
                    placeholder="Doctor's comment"
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button type='submit' onClick={handleSubmit} className='my-2' variant='primary'>
                    Continue
                </Button>
            </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default TreatmentForm