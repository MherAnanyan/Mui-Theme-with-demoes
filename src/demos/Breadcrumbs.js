import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const MuiBreadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '10px 20px' }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            style={{ margin: '20px 0' }}
          >
            <Link underline="hover" color="inherit" href="/">
              Link
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Link
            </Link>
            <Typography color="text.primary">Link</Typography>
          </Breadcrumbs>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Typography>
          </Breadcrumbs>
        </div>
        <div style={{ margin: '10px 20px' }}>
          <Breadcrumbs
            style={{ margin: '20px 0' }}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
            >
              Link
            </Link>
            <Link
              underline="hover"
              key="2"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              onClick={handleClick}
            >
              Link
            </Link>
            <Typography key="3" color="text.primary">
              Link
            </Typography>
          </Breadcrumbs>
          <Breadcrumbs
            style={{ margin: '20px 0' }}
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Typography>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Link
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      <Breadcrumbs
        style={{ margin: '10px 20px' }}
        maxItems={2}
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
  );
};
