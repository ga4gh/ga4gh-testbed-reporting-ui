import React from 'react';
import { Container, List, ListItem, ListItemText, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Specifications = () => {
  // Sample list of items with sub-lists and URLs
  const items = [
    { 
      id: 1, 
      name: 'Refget Compliance Suite', 
      subItems: [
        { id: 11, name: 'Refget API specification', url: 'https://samtools.github.io/hts-specs/refget.html' },
        { id: 12, name: 'Refget Compliance documentation', url: 'https://compliancedoc.readthedocs.io/' },
        { id: 13, name: 'Refget Compliance tool', url: 'https://github.com/ga4gh/refget-compliance-suite' },
      ]
    },
    { 
      id: 2, 
      name: 'RNAget Compliance Suite', 
      subItems: [
        { id: 21, name: 'RNAget API specification', url: 'https://github.com/ga4gh-rnaseq/schema/blob/master/rnaget-openapi.yaml' },
        { id: 22, name: 'RNAget compliance documentation', url: 'https://rnaget-compliance-suite.readthedocs.io/en/latest/' },
        { id: 23, name: 'RNAget compliance application', url: 'https://github.com/ga4gh-rnaseq/rnaget-compliance-suite' },
      ]
    },
  ];

  return (
    <Container maxWidth="md">
      <List>
        {items.map((mainItem) => (
          <div key={mainItem.id}>
            <ListItem disableGutters>
              <ListItemText primary={<Typography variant="h4">{mainItem.name}</Typography>} />
            </ListItem>
            <List disablePadding>
              {mainItem.subItems.map((subItem) => (
                <ListItem key={subItem.id} disableGutters>
                  <MuiLink
                    href={subItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'block',
                      "&:hover": { textDecoration: 'underline' }
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="body1" component="span" sx={{ textDecoration: 'none', display: 'inline' }}>
                         &bull; {subItem.name}
                        </Typography>
                      }
                    />
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Specifications;
