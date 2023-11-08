import { useEffect } from 'react';
import GitHubInfo  from '../components/GithubInfo';
import Box from '../components/Box';
function Homepage() {
    useEffect(() => {
    }, []);

    return (
        <> 
            <Box>
                <GitHubInfo username="Al3ssandro-create" />
                
            </Box>
        </>
    );
}

export default Homepage;