import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/anatomy-of-a-blog-post-deconstructed-open-graph.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Devananda Nakshatra</Typography>
                <Text variant="h5">I'm Devananda Nakshatra, a passionate Computer Science student based in Waterloo, ON, Canada. 
                    I'm enthusiastic about bringing my skills and expertise to the forefront of exciting opportunities in Computer Science.<br />
                    Join me on this journey of innovation and impact!
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Deva-354" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Interested in my work? Let's connect!
                        <Link href="mailto:devanandanakshatra@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;