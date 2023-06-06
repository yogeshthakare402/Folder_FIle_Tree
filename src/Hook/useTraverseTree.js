
function useTraverseTree() {
    function insertNode(tree, folderId, isFolder, item) {
        if (tree.name === folderId && tree.isFolder) {
            // console.log(tree, folderId, isFolder, item);
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []
            })
            return tree
        }


        let latestItemArray = [];
        latestItemArray = tree.items.map((obj) => {
            return insertNode(obj, folderId, isFolder, item)
        })

        return { ...tree, items: latestItemArray};

    }
    function renameNode(tree, folderId,newName) {
        // console.log('checking Names');
        // console.log(tree.name , folderId);
        if (tree.name === folderId) {
            // console.log(newName);
            tree.name = newName
            return tree
        }else{
            tree.items.map((obj) => {
                return renameNode(obj, folderId, newName)
            })
        }
        return tree;
    }

    function deleteNode(tree, folderId) {
        
        if (tree.name === folderId) {
            tree = {} 
            return tree
        }else{
            tree.items.map((obj) => {
                return renameNode(obj, folderId)
            })
        }
        return tree;
    }


    return { insertNode, renameNode, deleteNode}
}

export default useTraverseTree