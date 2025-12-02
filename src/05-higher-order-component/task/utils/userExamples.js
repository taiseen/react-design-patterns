const userExamples = [
    {
        id: 'u1',
        name: 'Alice',
        role: 'admin',
        permissions: ['report', 'edit', 'delete']
    },
    {
        id: 'u2',
        name: 'Bob',
        role: 'user',
        permissions: ['report', 'edit',]
    },
    {
        id: 'u3',
        name: 'Jon',
        role: 'user',
        permissions: ['report']
    },
    {
        id: 'u4',
        name: 'Eva',
        role: 'user',
        permissions: ['edit', 'delete']
    },
    {
        id: 'u5',
        name: 'Taz',
        role: 'user',
        permissions: ['edit']
    },
    {
        id: 'u6',
        name: 'Sam - Guest',
        role: 'user',
        permissions: []
    }
];

export default userExamples;