import React from 'react'
import './/utils/Featured.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


const image1 = require('./utils/car3.png')
const image2 = require('./utils/car 2.JPG')
const image3= require('./utils/car1.jpg')
const image4= require('./utils/car4.webp')
const image6= require('./utils/car6.jpg')
const Featured = () => {
  return (
    <div className='main-featured' style={{display:'inline-flex'}}>
<Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{color:'gray'}} size="small">Learn More</Button>
        <FavoriteIcon style={{color:'gray'}} />
      </CardActions>
    </Card>



    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{color:'gray'}} size="small">Learn More</Button>
        <FavoriteIcon style={{color:'gray'}} />
      </CardActions>
    </Card>









    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{color:'gray'}} size="small">Learn More</Button>
        <FavoriteIcon style={{color:'gray'}} />
      </CardActions>
    </Card>












    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
       
      <Button style={{color:'gray'}} size="small">Learn More</Button>
        <FavoriteIcon style={{color:'gray'}} />
      </CardActions>
    </Card>


    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image6}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:'gray'}} size="small">Learn More</Button>
        <FavoriteIcon style={{color:'gray'}} />
      </CardActions>
    </Card>

    </div>
  )
}

export default Featured