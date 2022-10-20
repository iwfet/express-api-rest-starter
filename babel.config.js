module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
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