function allPeople (trainerData: string[], attendeeData: string[]): string[] {
    const arr: string[] = []
    return arr.concat(trainerData, attendeeData)
}

const trainers = ['Joe', 'Toni']
const attendees = ['Max', 'Sepp', 'Arno', 'Otto']

const allTogether: string[] = allPeople(trainers, attendees) 
console.log(allTogether)

// 01) Create an interface for the attendees data set
// 02) Hobbies should be optional all others are required
// 03) Allow only Visual Studio Code or IntelliJ as editor

interface Attendees {
    name: string
    company: string
    age: number
    hasTypeScriptExperience: boolean
    hobbies?: string[]
    editor: Editor
}

type Editor = 'Visual Studio Code' | 'IntelliJ'

const attendees2: Attendees[] = [
    {
        name: 'Otto',
        company: 'Google',
        age: 33,
        hasTypeScriptExperience: false,
        hobbies: ['Playing Guitar', 'Dancing'],
        editor: 'Visual Studio Code'
    },
    {
        name: 'Maria',
        company: 'Tesla',
        age: 24,
        hasTypeScriptExperience: true,
        hobbies: ['Traveling', 'Reading Books'],
        editor: 'IntelliJ'
    },
    {
        name: 'Sina',
        company: 'Spiegel Online',
        age: 39,
        hasTypeScriptExperience: true,
        editor: 'IntelliJ'
    }
]


// Try to create a generic type for the table to avoid to repeat yourself

interface Table<T> {
    head: string[]
    body: T[]
}

interface UserTableInterface {
    name: string;
    mail: string;
    city: string;
}

interface NewsTableInterface {
    headline: string
    text: string
}

const UserTable: Table<UserTableInterface> = {
    head: ['name', 'mail', 'city'],
    body: [
        {
            name: 'Ben',
            mail: 'ben@workshops.de',
            city: 'Hamburg'
        },
        {
            name: 'Lisa',
            mail: 'lisa@workshops.de',
            city: 'Berlin'
        }
    ]
}

const NewsTable: Table<NewsTableInterface> = {
    head: ['headline', 'text'],
    body: [
        {
            headline: 'A headline ',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
            headline: 'A second headline',
            text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ',
        }
    ]
}

