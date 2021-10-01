import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system'
import { Grid } from '@mui/material';
import News from '../News/News';
const Newspaper = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=a5b104fca4684417816cf9745d0cfb86')
            .then(res => res.json())
            .then(data => setNews(data.articles));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    news.map(nw =>
                        <Grid item xs={2} sm={4} md={4}>
                            <News article={nw}></News>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;