import { Card, CardHeader, FormControl, FormLabel, Input, Button, Link, CardContent, Typography, CardMedia, Grid, Paper, TextField } from "@mui/material";
import "./styles.css"
import Logo from "/src/assets/matchmaking-logo-reduzido.png"
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup'
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';


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
            navigate('/');
        } catch (error) {
            alert("Não foi possível fazer o cadastro. Favor tentar novamente");
        }
    }

    return (
        <Card
            sx={{ margin: "0em 20em 0em" }}
            className="card-form">
            <Grid container direction="row"
                justifyContent="center"
            >
                <CardMedia
                    className="img"
                    sx={{ width: "500px", height: "100px", borderRadius: '200px 200px 200px 200px' }}
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
                        </Form>
                    )}

                </Formik>

                {/* <form>
                        <section className="form">
                            <div className='form-input'>
                                <FormControl
                                    sx={{ margin: '1em 1em 2em'}}
                                >
                                    <FormLabel>Nome de Usuário:</FormLabel>
                                    <Input
                                        isrequired="true"
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder='Usuário' />
                                </FormControl>
                                <FormControl
                                sx={{ margin: '1em 1em 2em'}}>
                                    <FormLabel>Nome:</FormLabel>

                                    <Input
                                        isrequired="true"
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder='Nome' />
                                </FormControl>
                                <FormControl
                                sx={{ margin: '1em 1em 2em'}}>
                                    <FormLabel>E-mail:</FormLabel>

                                    <Input
                                        type="email"
                                        isrequired="true"
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder='usuario@email.com' />
                                </FormControl>
                                <FormControl
                                sx={{ margin: '1em 1em 2em'}}>
                                    <FormLabel>Senha:</FormLabel>

                                    <Input
                                        isrequired="true"
                                        onChange={e => setUsername(e.target.value)}
                                        type="password"
                                        placeholder='Senha' />
                                </FormControl>
                            </div>
                            <div className='button'>
                                <Button  sx={{ margin: '1em 1em 2em'}} type='submit' color="inherit" >Login</Button>
                                <Link className='link' to="/register"><Button colorscheme='blue' >Cadastrar-se</Button></Link>
                            </div>
                        </section>
                    </form> */}
            </CardContent>
        </Card>
    )
}