import React from 'react'
import {Section,Title, SectionButton} from '../../utils'
import styled from 'styled-components';
import {Link} from 'gatsby';
import {styles} from '../../utils'

export default function QuickInfo() {
    return (
        <Section>
            <Title message="let us tell you something!" title="our mission"/>
            <QuickInfoWrapper>
                <p className= "text">
                    Dolore labore sunt cillum culpa fugiat occaecat. Dolore enim ipsum fugiat laborum nisi eiusmod non anim excep
                    teur. Lorem ullamco enim adipisicing minim esse ea minim mollit. Eu elit irure aute dolore aliquip do. Ut do 
                    nisi cillum quis aute eiusmod non tempor.
                </p>
                <Link to="/about" style={{textDecoration: "none"}}>
            <SectionButton style={{margin: "2rem auto"}}>about</SectionButton>
                </Link>


            </QuickInfoWrapper>
        </Section>
    )
}

const QuickInfoWrapper = styled.div`
width: 90%;
margin: 2rem auto;
.text{
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
}
@media (min-width: 768px){
    width: 70%;
}
@media (min-width: 992px){
    width: 60%;
}
`
