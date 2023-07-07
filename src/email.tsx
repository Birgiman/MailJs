import { Avatar, AvatarFallback, AvatarImage } from '@react-email/avatar';
import { Button } from "@react-email/button";
import { Container } from '@react-email/container';
import { Font } from '@react-email/font';
import { Head } from '@react-email/head';
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

type Props ={
  url: string;
}

const containerStyle: React.CSSProperties = {
    width: "auto",
    maxWidth: "100%",
};

const headerStyle: React.CSSProperties = {
    background: "#485FEB",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
const headerTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: "500",
  color: "#fff",
};

const mainStyle: React.CSSProperties = {
  padding: 16,
  backgroundColor: "#f7f7f7",
};

const pStyle: React.CSSProperties = {
  fontSize: 16,
};

const buttonContainer: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const buttonStyle: React.CSSProperties = {
  minWidth: 224,
  height: 32,
  backgroundColor: "#485FEB",
  textTransform: "uppercase",
  padding: 8,
  borderRadius: 8,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none"
};

const footerStyle: React.CSSProperties = {
  marginTop: 16,
  display: "flex",
  alignItems: "center",
};

const aboutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 8,
};

const aboutTextStyle: React.CSSProperties = {
  fontSize: 14,
};



const Email: React.FC<Readonly<Props>> = ({ url }) => {
  return (
    <>
      <Head>
        <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={500}
            fontStyle="normal"
          />
      </Head>

      <Html lang="pt-BR">
      <Container style={containerStyle}>
        <div style={headerStyle}>
          <Text style={headerTitleStyle}>Eduardo Developer</Text>
        </div>

        <div style={mainStyle}>
          <Text style={pStyle}>Teste de texto</Text>
          <Text style={pStyle}>Teste de texto</Text>
          <Text style={pStyle}>Teste de texto, Teste de texto, Teste de texto, Teste de texto</Text>

          <div style={buttonContainer}>
            <Button href={url} style={buttonStyle}>Clique aqui</Button>
          </div>

          <div style={footerStyle}>
            <Avatar>
              <AvatarImage src="https://github.com/Birgiman.png"/>
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
            <div style={aboutStyle}>
              <span style={aboutTextStyle}><b>Eduardo Birgiman</b></span>
              <span style={{...aboutTextStyle, marginTop: 4}}>Front-End Developer</span>
            </div>
          </div>
        </div>

      </Container>
    </Html>
    </>
  )
}

export default Email;
