import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Col, Container, Row } from "reactstrap";

import DashNavBar from "@/app/ui/components/DashNavBar";
import DashTopBar from "@/app/ui/components/DashTopBar";
import DashSidebar from "@/app/ui/components/DashSidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/ui/styles/DashLayout.module.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My Dashboard",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <DashSidebar />
        <DashNavBar />
        <Container className={styles.content}>
          {children}
        </Container> */}


      <Container fluid className="mt-5">
        <Row noGutters>
          <Col xs="auto" className="vh-100">
            <DashSidebar />
          </Col>
          <Col xs="auto" className={`vh-100 overflow-auto`}>
            <div id="content-root" className={`${styles.content}`}>
              {/* <DashNavBar /> */}
              <DashTopBar />
              {children}
            </div>
          </Col>
        </Row>
      </Container>

      </body>
    </html>
  );
}
