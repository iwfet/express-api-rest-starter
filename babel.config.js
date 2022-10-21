module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            NODE_ENV: 'current'
          }
        }
      ],
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@config': './src/config',
          '@models': './src/models',
          '@controllers': './src/controllers'
        }
      }]
    ],
    ignore: [
      '**/*.test.ts',
      '**/**/imagem**'
    
    ]
  }