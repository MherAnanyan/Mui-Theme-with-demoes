import { Wrapper } from "../Wrapper"
import TreeView from "@mui/lab/TreeView"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import TreeItem from "@mui/lab/TreeItem"

export const TreeViews = () => {
  return (
    <Wrapper title="TreeView">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Tree item"></TreeItem>
      </TreeView>

      <br />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Tree item"></TreeItem>
      </TreeView>

      <br />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Tree item" disabled></TreeItem>
      </TreeView>

      <br />

      <TreeItem nodeId="1" label="Is Child" />

      <br />
      <br />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Tree item">
          <TreeItem nodeId="2" label="item" />
        </TreeItem>
      </TreeView>

      <br />
      <br />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ExpandMoreIcon />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Tree item">
          <TreeItem nodeId="2" label="item" />
        </TreeItem>
      </TreeView>

      <br />
      <br />

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["1", "7", "8"]}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrom" />
          <TreeItem nodeId="4" label="Item" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="Item" />
        </TreeItem>
        <TreeItem nodeId="7" label="Material-UI">
          <TreeItem nodeId="8" label="src">
            <TreeItem nodeId="9" label="index.js" />
            <TreeItem nodeId="10" label="three-view.js" disabled>
              <TreeItem nodeId="11" label="Item" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Wrapper>
  )
}
