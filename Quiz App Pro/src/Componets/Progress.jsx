

export default function Progress ({index, numQusetions, points, maxPoints, answer}) {
    
    return (
        <header className="progress">
            <progress max={numQusetions} value={index + Number(answer !== null)} />
            <p>
                Question <strong>{index + 1}</strong> / {numQusetions}
            </p>
            <p>
                <strong>{points} / {maxPoints}</strong>
            </p>
        </header>
    )
};