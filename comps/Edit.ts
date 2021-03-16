import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const EditForm: React.FC<IEditFormProps> = () => {

    const chirpid = useParams();
    const history = useHistory();

    const [username, setUsername] = useState<string>('')
    const [message, setMessage] = useState<string>('');

    const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
    const usernameChange = (e: React.ChangeEvent<HTMLSelectElement>) => setUsername(e.target.value);

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch(`/api/chirps/${chirpid}`, {
            method: 'PUT',
            body: JSON.stringify({ username, message })
        });
        if (res.ok) {
            history.push(`/chirps/details/${chirpid}`);
        }
    }

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch(`/api/chirps/${chirpid}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            history.push('/');
        };

    }

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${chirpid}`);
            let chirp = await res.json();
            setUsername(chirp.username);
            setMessage(chirp.message);
        })();
    }, [chirpid]);

    return (
        <>
        

        </>
    )

};

interface IEditFormProps { }

export default EditForm;