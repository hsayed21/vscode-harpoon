import ActiveProjectService from "../service/active-project-service";
import WorkspaceService from "../service/workspace-service";

export default function createRemoveAllEditorsCommand(
    activeProjectService: ActiveProjectService,
    workspaceService: WorkspaceService
) {
    return () => {
        activeProjectService.removeAllEditors();
        workspaceService.saveWorkspace();
    };
}
