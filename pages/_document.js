import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: themeInitializerScript,
                        }}
                    ></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

function mode() {
    function getTheme() {
        let theme = localStorage.getItem('theme');
        if (theme) return theme;

        const preference = window.matchMedia('(prefers-color-scheme: dark)');
        if (preference) return preference.matches ? 'dark' : 'light';

        return 'light';
    }

    const current = getTheme();
    if (current === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

const themeInitializerScript = `(function() {
	${mode.toString()}
	mode();
})()
`;

export default MyDocument;