import { Card, CardHeader, FormControl, FormLabel, Input, Button, CardContent, Typography, CardMedia, Grid, Paper, TextField } from "@mui/material";
import "./styles.css"
import Logo from "/src/assets/matchmaking-logo-reduzido.png"
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup'
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";





const initialValues = {
    username: '',
    password: '',
}

const btnstyle = { margin: '8px 0' }

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
})

export default function Login() {

    const navigate = useNavigate();

    async function onSubmit(values, props) {

        try {
        const response = await api.post('/auth', values);

        localStorage.setItem('username', values.username);
        localStorage.setItem('token', response.data.token);

        navigate('/postar')
        } catch (error) {
            alert("Não foi possível fazer login. Favor tentar novamente");
        }
    }

    return (
        < div className='container' >
            <Sidebar />
            <div>
                <Card
                    sx={{ margin: "0em 0em 0em" }}
                    className="card-form">
                    <Grid container direction="row"
                        justifyContent="center"
                    >
                        <CardMedia
                            className="img"
                            sx={{ width: "500px", height: "200px", borderRadius: '200px 200px 200px 200px' }}
                            image={Logo}
                        />
                    </Grid>
                    <Typography variant="h2" color="text.secondary" gutterBottom component="div" align="center">
                        Login
                    </Typography>
                    <CardContent className="content-login">
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {(props) => (
                                <Form >
                                    <Field
                                        sx={{ margin: '1em' }}
                                        as={TextField} label="Nome de usuário" name="username"
                                        placeholder='Nome de usuário' fullWidth required
                                        helperText={<ErrorMessage name="username" />}
                                    />
                                    <Field
                                        sx={{ margin: '1em' }}
                                        as={TextField} label='Senha' name="password"
                                        placeholder='Senha' type='password' fullWidth required
                                        helperText={<ErrorMessage name="password" />}
                                    />
                                    <div className='button'>
                                        <Button className="h-12" type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                            style={btnstyle} fullWidth>{props.isSubmitting ? "Carregando" : "Login"}</Button>
                                        <Link className='link' to="/cadastrar"><Button className="h-12" color="success" variant="contained">Cadastrar-se</Button></Link>
                                    </div>
                                </Form>
                            )}

                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}