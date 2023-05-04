import { useState } from "react";
import Folder from "./components/Folder";
import "./styles.css";
import explorer from "./data/folderData";
import useTraverseTree from "./hooks/use-traverse-tree";
export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder data={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
