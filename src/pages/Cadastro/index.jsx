import { Card, CardHeader, FormControl, FormLabel, Input, Button, CardContent, Typography, CardMedia, Grid, Paper, TextField } from "@mui/material";
import "./styles.css"
import Logo from "/src/assets/matchmaking-logo-reduzido.png"
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup'
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";


const initialValues = {
    username: '',
    name: '',
    email: '',
    password: '',
}

const btnstyle = { margin: '8px 0' }

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Por favor, digite um e-mail válido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
})



export default function Cadastro() {
    const navigate = useNavigate();

    async function onSubmit(values, props) {
        console.log('SUBMIT', values);
        props.resetForm();

        try {
            const response = await api.post('/auth/register', values);
            navigate('/login');
        } catch (error) {
            alert("Não foi possível fazer o cadastro. Favor tentar novamente");
        }
    }

    return (
        < div className='container' >
            <Sidebar />
                <Card
                    // sx={{ margin: "0em 0em 0em" }}
                    className="card-sobrenos">
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
                        Cadastro de Usuário
                    </Typography>
                    <CardContent>
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
                                        as={TextField} label="Nome" name="name"
                                        placeholder='Nome' fullWidth required
                                        helperText={<ErrorMessage name="name" />}
                                    />
                                    <Field
                                        sx={{ margin: '1em' }}
                                        as={TextField} label="E-mail" name="email"
                                        placeholder='E-mail' fullWidth required
                                        helperText={<ErrorMessage name="email" />}
                                    />
                                    <Field
                                        sx={{ margin: '1em' }}
                                        as={TextField} label='Senha' name="password"
                                        placeholder='Senha' type='password' fullWidth required
                                        helperText={<ErrorMessage name="password" />}
                                    />
                                    <div className='button'>
                                        <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                            style={btnstyle} fullWidth>{props.isSubmitting ? "Carregando" : "Cadastrar"}</Button>
                                        {/* <Link className='link' to="/register"><Button colorscheme='blue' >Cadastrar-se</Button></Link> */}
                                    </div>
                                    <div className="w-100% text-center">
                                        <p>Já possui cadastro? <Link className="text-sky-400" to="/login">Fazer login</Link>  </p>
                                    </div>
                                </Form>
                            )}

                        </Formik>

                    </CardContent>
                </Card>
        </div>
    )
}