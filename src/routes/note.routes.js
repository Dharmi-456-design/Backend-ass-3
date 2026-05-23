const express = require('express');
const router = express.Router();
const {
    createNote,
    createBulkNotes,
    getAllNotes,
    getNoteById,
    replaceNote,
    updateNote,
    deleteNote,
    deleteBulkNotes,
    searchByTitle,
    searchByContent,
    searchAll,
    filterAndSort,
    filterAndPaginate,
    sortAndPaginate,
    searchAndFilter,
    searchSortPaginate,
    filterSortPaginate,
    masterQuery,
} = require('../controllers/note.controller');

// Search routes
router.get("/search/content", searchByContent);
router.get("/search/all", searchAll);
router.get("/search", searchByTitle);

// Combination routes
router.get("/filter-sort", filterAndSort);
router.get("/filter-paginate", filterAndPaginate);
router.get("/sort-paginate", sortAndPaginate);
router.get("/search-filter", searchAndFilter);
router.get("/search-sort-paginate", searchSortPaginate);
router.get("/filter-sort-paginate", filterSortPaginate);
router.get("/query", masterQuery);















// CRUD bulk
router.post("/bulk", createBulkNotes);
router.delete("/bulk", deleteBulkNotes);


// CRUD single
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);




module.exports = router;
