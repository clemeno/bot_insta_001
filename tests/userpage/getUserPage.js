/* global require */
/* global console */
( () => {
  const https = require( 'https' ),
    fs = require( 'fs' ),
    DEFAULT = {
      username: 'clem3n0'
    };
  let request = null,
    initial_options = {
      hostname: 'www.instagram.com',
      port: 443,
      path: ( '/' + DEFAULT.username + '/' )
    },
    wstream = fs.createWriteStream( 'dump/' + Number( new Date() ) + '_' + DEFAULT.username + '.html' );
  request = https.request( initial_options, response => response.on( 'data', data => wstream.write( data ) ) );
  request.on( 'error', error => {
    wstream.end();
    console.log( error );
  } );
  request.on( 'end', () => wstream.end() );
  request.end();
} )();
