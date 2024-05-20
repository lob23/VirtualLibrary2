"use server";
import config from '../../config'
import { cookies } from 'next/headers'
//POST
export const postLogin = async (req) => {
    const queryString = config.BACKEND_URL + "/auth/login";
    var token = await fetch(queryString,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: req.email,
                password: req.password
            })
        }
    );
    token = await token.json();
    token = token.accessToken;
    cookies().set('accessToken', token);
}