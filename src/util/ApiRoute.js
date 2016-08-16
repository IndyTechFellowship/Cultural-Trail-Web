const devAPI = 'http://localhost:4000'
const prodAPI = 'http://ec2-52-206-122-212.compute-1.amazonaws.com'

export default () => {
  const env = process.env.NODE_ENV
  if (env === 'development') {
    return prodAPI
  } else if(env === 'production') {
    return prodAPI
  } else {
    return devAPI
  }

}
