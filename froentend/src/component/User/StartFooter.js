import React from 'react'

import { Footer, Box, Anchor, Heading } from 'grommet'
import { Facebook, Twitter, Linkedin } from 'grommet-icons'

export const SimpleFooter = () => (
  <Footer
    background='dark-1'
    justify='center'
    pad='small'
    style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '2.5rem',
    }}
  >
      <Heading size='small' level='5'>
      © 2020 Copyright E-News
   </Heading>
    <Heading size='small' level='5'>Follow us on </Heading>
    <Box direction='row'>
    <Anchor
              href={`https://www.facebook.com`}
              target='_blank'
              rel='nofollow'
            >
              <Facebook color='#4267B2'></Facebook>
              </Anchor>
              <Anchor
              margin={{ left: '2px' }}
              href={`https://twitter.com`}
              target='_blank'
              rel='nofollow'
            >
              <Twitter color='#1DA1F2'></Twitter>
            </Anchor>
            <Anchor
              margin={{ left: '2px' }}
              href={`https://www.linkedin.com`}
              target='_blank'
              rel='nofollow'
            > <Linkedin color='#0e76a8'></Linkedin></Anchor>
            
    </Box>
  </Footer>
)
