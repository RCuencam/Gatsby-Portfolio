import React from 'react'
import { TitleSection } from '../TitleSection'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message:yup.string().required()
  });

export const ContactSection = () => {
    const {control, handleSubmit,formState:{ errors }}=useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit=async (data)=>{
        await emailjs.send('service_bj55scf', 'template_poxrwmc',data, 'user_5gPQuoITYzdZJbewzX6h6')
        .then((result) => {
              console.log(result);
        }, (error) => {
            console.log(error.text);
        })
        await Swal.fire(
            'Mensaje Enviado!',
            'En unos momentos te responderé...',
            'success'
          )};

    return (
        <div className="contact">
            <TitleSection title="Contact"/>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className="form">
                        <label className="form_label">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({field})=><TextField id="name"  variant="outlined" className="form_input" {...field} />}
                         />
                         <p>{errors.name?.message}</p>
                    </Grid>
                    <Grid item xs={12} md={6} className="form">
                        <label className="form_label">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field})=><TextField id="email"  variant="outlined" className="form_input" {...field}/>}
                         />
                         <p>{errors.email?.message}</p>
                    </Grid>
                    <Grid item xs={12} md={12} className="form">
                        <label className="form_label">Message</label>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            render={({field})=><TextareaAutosize id="message"  variant="outlined" className="form_input" minRows={7} {...field} />}
                         />
                         <p>{errors.message?.message}</p>
                        
                    </Grid>
                    <button type="submit">Enviar</button>
                </Grid>
            </form>
        </div>
    )
}
