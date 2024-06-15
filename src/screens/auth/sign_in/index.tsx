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
import useSignIn from "@/hooks/useSignIn";
import { useAuthCtx } from "@/context/Auth";

const SignIn = () => {
    const { register, handleSubmit, onSubmit, errors, handleClick } = useSignIn()
    const { isLoggingIn } = useAuthCtx()
    //passed as a prop to the password input
    const [isTypePassword, setIsTypePassword] = React.useState(true)

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
                        <p>Enter your credentials to continue</p>
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
                            label="Email"
                            name="email"
                            placeholder="Email address"
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
                        <LoginButton type="submit" disabled={isLoggingIn}>
                            Login
                        </LoginButton>
                        <p>Don't have an account? <Link to={ACCESS_ROUTE.SIGNUP}>Sign Up</Link></p>
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
                        repeat: Infinity
                    }}
                >
                    <img src={Man} alt="Man" />
                </motion.section>
            </div>
        </SignUpContainer>
    )
}

export default SignIn