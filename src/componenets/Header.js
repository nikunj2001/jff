import React,{useState} from 'react'
import { HeaderContainer,HeaderHeading ,SubHeading} from '../styled-components/HaederStyles'
import { Container ,Link} from '../styled-components/SharedStyled';
const Header = () => {
    const [state] = useState({
        heading:" Developer Fun Site",
        subHeading:"release your frustation........"
    })
    return (
        <div>
        <HeaderContainer>
                <Container>
                    <HeaderHeading>
                       {state.heading}
                        </HeaderHeading>
                        <SubHeading>
                            {state.subHeading}
                        </SubHeading>
                        <Link href="https://www.xv-horezeedipaif.com/video27777483/brazzers_-_kristen_scott_---_full_video_at_brazzers.xxx">
                            Best Collection For devlopers working from home
                        </Link>
                </Container>
            </HeaderContainer>

        </div>
    )
}

export default Header
