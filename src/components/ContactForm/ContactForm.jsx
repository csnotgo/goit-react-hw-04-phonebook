import { useState } from 'react';
import PropTypes from 'prop-types'
import { Input, Label, Form, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onInputChange = e => {
   switch (e.target.name) {
     case 'name':
      setName(e.target.value)
      break;
     case 'number':
      setNumber(e.target.value)
      break;
    default:
      break;
   }
  };

 const onFormSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});
    reset();
  };

 const reset = () => {
   setName('');
   setNumber('')
  };

    return (
      <Form onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Amina..."
            onChange={onInputChange}
            style={{ marginLeft: '28px' }}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="(093)-55-555-55"
            onChange={onInputChange}
          />
        </Label>
        <Button type="submit">✅ Add</Button>
      </Form>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}
