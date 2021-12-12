import * as React from 'react'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'

const AboutPage = () => {
  const [helloHttp, setHelloHttp] = React.useState("");
  const [text, setText] = React.useState("initial text");
  const [rows, setRows] = React.useState([])
  const getHelloHttp = () => {
    fetch(`https://us-central1-geocode-305322.cloudfunctions.net/helloHttp?name=${text}`)
      .then(response => response.json())
      .then(resultData => setHelloHttp(resultData))
  }
  const getHelloMongo = () => {
    fetch(`https://us-central1-geocode-305322.cloudfunctions.net/helloMongo`)
      .then(response => response.json())
      .then(resultData => setRows(resultData))
  }
  // React.useEffect(() => {
  //   fetch(`https://us-central1-geocode-305322.cloudfunctions.net/helloHttp`)
  //     .then(response => response.json())
  //     .then(resultData => setHelloHttp(resultData))
  // })
  return (
    <Layout pageTitle="About Me">
      <p>I like Gatsby, and I made this site with it!</p>
      <p>Someone said Hello and wrote:</p>{" "}
      <Box>{helloHttp.data ?? ""}</Box>
      <br />
      <Button
        variant='outlined'
        onClick={getHelloHttp}
      >
        Fancy Button
      </Button>{" "}
      <TextField value={text} onChange={(evt) => { setText(evt.target.value) }} />
      <br />
      <Button
        variant='outlined'
        onClick={getHelloMongo}
      >
        Get Mongo Data
      </Button>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>State</TableCell>
              <TableCell align='right'>Confirmed</TableCell>
              <TableCell align='right'>Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">{row._id}</TableCell>
                <TableCell align='right'>{row.Province_State}</TableCell>
                <TableCell align='right'>{row.Confirmed}</TableCell>
                <TableCell align='right'>{row.Deaths}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        variant='outlined'
        onClick={() => { console.log(rows) }}
      >Log Rows</Button>
    </Layout>
  )
}

export default AboutPage