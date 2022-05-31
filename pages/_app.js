import '../styles/globals.css';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Con from "Components/Container";

function MyApp({ Component, pageProps }) {
  return <Con>
            <link rel="shortcut icon" href="/logo.ico" />
            <Component {...pageProps} />
        </Con>
}
export default MyApp
