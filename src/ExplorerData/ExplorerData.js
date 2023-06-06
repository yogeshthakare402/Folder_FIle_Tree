const explorerData = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
        {
            id: 1,
            name: "public",
            isFolder: true,
            items: [
                {
                    id: 1,
                    name: "public1.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: 2,
                    name: "public2.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: 3,
                    name: "public3.js",
                    isFolder: false,
                    items: []
                },
            ]
        },
        {
            id: 2,
            name: "src",
            isFolder: true,
            items: [
                {
                    id: 1,
                    name: "file1.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: 2,
                    name: "file2.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: 3,
                    name: "file3.js",
                    isFolder: false,
                    items: []
                },

            ]
        },
        {
            id: 1,
            name: "package.json",
            isFolder: false,
            items: []
        }
    ]
}
export default explorerData;
