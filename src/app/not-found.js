import Link from 'next/link';

const NotFound = (props) => {

    return (
        <div className='text-center h-screen flex justify-center flex-col'>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound;