import React, {useState} from 'react';
import Api from '../../services/api';

export default function Login({ history }) {

const [email, setEmail] = useState('');
async function handleSubmit(event) {
    event.preventDefault();
    const response = await Api.post('/sessions',{email});
    
    const { _id } = response.data;
    localStorage.setItem('user', _id);
    history.push('/dashboard');
}
    return (
        <>
            <p>
         Oferaça <strong>spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
             type="email"
             id="email"
             placeholder="Seu melhor e-mail"
             value={email}
             onChange = {event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
    </>
    );
}