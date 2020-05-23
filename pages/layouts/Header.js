import Head from 'next/head';

const Header = () => {
    return (
        <>
            <Head>
                <title>EXPEDIENTE MÉDICO MÉXICO</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700"
                    rel="stylesheet">
                </link>
            </Head>



            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: 'Quicksand', sans-serif;
                }
            `}</style>
        </>
    )
}

export default Header;