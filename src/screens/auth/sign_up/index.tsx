import * as React from "react"
import Man from "/Mobile_marketing-removebg.png"
import LOGO from "/spendwise_logo.png"
import TextField from "@/components/Textfield";
import { Logo } from "@/styles/body"
import {
    FormContainer,
    Header,
    LoginSDKs,
    Select,
    SignUpContainer,
    Wrapper,
    ButtonSDK,
    ButtonGroup,
    OR,
    LoginButton
} from "@/styles/auth/styles"
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { ACCESS_ROUTE } from "@/routes/path";
import useSignUp from "@/hooks/useSignUp";
import { useAuthCtx } from "@/context/Auth";

const SignUp = () => {
    const { register, handleSubmit, onSubmit, errors, handleClick } = useSignUp()
    const { isSigningUp } = useAuthCtx()
    const [isTypePassword, setIsTypePassword] = React.useState(true) //passed as a prop to the password input

    return (
        <SignUpContainer>
            {/* Form */}
            <div>
                <Header>
                    <Logo><img src={LOGO} width={40} alt="Logo" />pendWise</Logo>

                    <Select id="lang">
                        <option value="en">English</option>
                    </Select>
                </Header>

                <Wrapper>
                    <LoginSDKs>
                        <h2>Welcome!</h2>
                        <p>Create Your Account In <i style={{ color: "#a392fa" }}>SpendWise</i> to continue</p>
                        <ButtonGroup>
                            <ButtonSDK onClick={handleClick}><FcGoogle size={20} /> Log in with Google</ButtonSDK>
                            <ButtonSDK><i><GrApple size={20} /></i> Log in with Apple</ButtonSDK>
                        </ButtonGroup>
                    </LoginSDKs>

                    <OR>
                        <i /> <legend>OR</legend> <i />
                    </OR>

                    <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Username"
                            name="username"
                            placeholder="Your username"
                            type="text"
                            register={register}
                            error={errors.username}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            placeholder="Your email address"
                            type="email"
                            register={register}
                            error={errors.email}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            placeholder="Your password"
                            type={isTypePassword ? "password" : "text"}
                            register={register}
                            error={errors.password}
                            isTypePassword={isTypePassword}
                            setIsTypePassword={setIsTypePassword}
                        />

                        <LoginButton
                            type="submit"
                            disabled={isSigningUp}>
                            Sign Up
                        </LoginButton>
                        <p>Already have an account? <Link to={ACCESS_ROUTE.SIGNIN}>Login</Link> </p>
                    </FormContainer>
                </Wrapper>
            </div>

            <div>
                <motion.section
                    animate={{
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}
                >
                    <img src={Man} alt="Man" />
                </motion.section>
            </div>
        </SignUpContainer>
    )
}

export default SignUp