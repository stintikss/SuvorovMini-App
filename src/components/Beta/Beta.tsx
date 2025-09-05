export function Beta() {
    const currentYear = new Date().getFullYear();

    return (
        <span className="text-gray-400/90">
            © {currentYear} DevTrip.&nbsp;
            <a
                className="text-blue-400/50 underline"
                href="https://t.me/devtripbeta"
                target="_blank"
                rel="noopener noreferrer"
            >
                Beta test
            </a>
        </span>
    );
}