import Man from "../../../../public/Mobile_marketing-removebg.png"
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
} from "@/styles/sign_up/styles"
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { motion } from "framer-motion"

const SignUp = () => {
    return (
        <SignUpContainer>
            {/* Form */}
            <div>
                <Header>
                    <Logo>SpendWise</Logo>

                    <Select id="lang">
                        <option value="en">English</option>
                    </Select>
                </Header>

                <Wrapper>
                    <LoginSDKs>
                        <h2>Welcome!</h2>
                        <p>Login to <i style={{ color: "#a392fa" }}>SpendWise</i> to continue</p>
                        <ButtonGroup>
                            <ButtonSDK><FcGoogle size={20} /> Log in with Google</ButtonSDK>
                            <ButtonSDK><i><GrApple size={20} /></i> Log in with Apple</ButtonSDK>
                        </ButtonGroup>
                    </LoginSDKs>

                    <OR>
                        <i /> <legend>OR</legend> <i />
                    </OR>

                    <FormContainer>
                        <TextField
                            label="Email"
                            name="email"
                            placeholder="Your email address"
                            type="email"
                        />
                        <TextField
                            label="Password"
                            name="password"
                            placeholder="Your password"
                            type="password"
                        />
                        <LoginButton>
                            Login
                        </LoginButton>
                    </FormContainer>
                </Wrapper>
            </div>

            <div>
                <motion.section
                    animate={{
                        y: [0, -30, 0]
                    }}
                    transition={{
                        delay: 2,
                        duration: 4,
                        repeat: Infinity
                    }}
                >
                    <img src={Man} alt="Man" />
                </motion.section>
            </div>
        </SignUpContainer>
    )
}

export default SignUp