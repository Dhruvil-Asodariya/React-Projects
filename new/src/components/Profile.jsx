function Profile(){
    return (
        <div>
            <h1>Profile card challenge</h1>
            <ProfileCard 
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderfull day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, hiking</p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard 
                name="Bob"
                age={28}
                greeting={
                    <div>
                        <strong>Hi Bob, keep up hte great work!</strong>
                    </div>
                }
            >
                <p>Hobbies: Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;

// eslint-disable-next-line react/prop-types
function ProfileCard({ name, age, greeting, children}){
    // const { name, age, greeting, children} = props;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p> {greeting} </p>
            <div> {children} </div>
        </>
    );
}