function ConfirmDelete({
  resourceName = 'item',
  onClose,
  disabled,
  onConfirm,
}) {
  return (
    <div className="flex flex-col gap-y-6">
      {/* Title + Message */}
      <div className="flex flex-col gap-y-2">
        <p className="text-base font-medium">
          Delete{' '}
          <span className="text-red-700 font-semibold">"{resourceName}"</span>?
        </p>

        <p className="text-sm bg-gray-100 text-subtitle px-3 py-2 rounded-lg">
          # This action cannot be undone.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-x-3">
        <button
          onClick={onClose}
          disabled={disabled}
          className="px-4 py-2 rounded-lg border text-subtitle hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          disabled={disabled}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
