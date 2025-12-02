const withUserDataAndPermissions = (WrappedComponent, permission = null) => {
  return function WithUserDataAndPermissions({ user, ...props }) {
    const hasPermission = (perm) => {
      return perm === "admin"
        ? user.role === "admin"
        : user.permissions.includes(perm);
    };

    // Access denied
    if (permission && !hasPermission(permission)) {
      return (
        <div className="p-4 bg-red-500/50 text-red-200 rounded text-lg">
          🔒 Access Denied
        </div>
      );
    }

    return (
      <WrappedComponent hasPermission={hasPermission} user={user} {...props} />
    );
  };
};

export default withUserDataAndPermissions;
